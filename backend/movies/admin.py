from django.contrib import admin
from .models import Movie

@admin.register(Movie)
class MovieAdmin(admin.ModelAdmin):
    list_display = ('title', 'year', 'rating', 'director', 'vibe')
    list_filter = ('year', 'vibe', 'era')
    search_fields = ('title', 'director', 'description')
