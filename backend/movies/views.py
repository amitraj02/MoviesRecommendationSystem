from django.http import JsonResponse
from .models import Movie

def movie_list(request):
    """
    API endpoint that returns a list of all movies in JSON format.
    """
    movies = Movie.objects.all().order_by('id')
    data = []
    
    for m in movies:
        data.append({
            'id': m.id,
            'title': m.title,
            'year': m.year,
            'rating': m.rating,
            'duration': m.duration,
            'description': m.description,
            'director': m.director,
            'poster': m.poster,
            'genres': m.genres,    # Native JSON list from JSONField
            'vibe': m.vibe,
            'intensity': m.intensity,
            'era': m.era
        })
        
    return JsonResponse(data, safe=False)
