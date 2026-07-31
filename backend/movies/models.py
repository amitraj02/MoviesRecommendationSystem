from django.db import models

class Movie(models.Model):
    title = models.CharField(max_length=255)
    year = models.IntegerField()
    rating = models.FloatField()
    duration = models.CharField(max_length=50)
    description = models.TextField()
    director = models.CharField(max_length=255)
    poster = models.URLField(max_length=1000)  # Standard URLField to hold TMDB poster URLs
    genres = models.JSONField(default=list)    # Stores genres list like ["Comedy", "Drama"]
    vibe = models.CharField(max_length=100)
    intensity = models.IntegerField()
    era = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.title} ({self.year})"
