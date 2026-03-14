from django.db import models
from django.utils.text import slugify
from organizers.models import OrganizationProfile

class Blog(models.Model):
    organization = models.ForeignKey(
        OrganizationProfile,
        on_delete=models.CASCADE,
        related_name="blogs"
    )
    title = models.CharField(max_length=255, blank=False)
    slug = models.SlugField(unique=True, blank=True, db_index=True)
    content = models.TextField(blank=False)
    cover_image = models.ImageField(
        upload_to="blog_covers/",
        null=True,
        blank=True
    )
    excerpt = models.CharField(max_length=300, blank=True)
    reading_time = models.PositiveIntegerField(default=1)  # minutes
    is_published = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def generate_unique_slug(self):
        base_slug = slugify(self.slug) if self.slug else slugify(self.title)
        slug = base_slug
        counter = 1

        while Blog.objects.filter(slug=slug).exclude(id=self.id).exists():
            slug = f"{base_slug}-{counter}"
            counter += 1

        return slug

    def calculate_reading_time(self):
        words = len(self.content.split())
        minutes = words / 200  # avg reading speed
        return max(1, round(minutes))
    
    def generate_excerpt(self):
        return self.content[:150]

    def save(self, *args, **kwargs):
        self.slug = self.generate_unique_slug()
        self.reading_time = self.calculate_reading_time()
        if not self.excerpt:
            self.excerpt = self.generate_excerpt()
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title