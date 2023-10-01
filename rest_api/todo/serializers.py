"""
Our serializer will take our model data and convert
it to json and then send it to our frontend
"""

from rest_framework import serializers
from .models import Todo


class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = ('id', 'title', 'description', 'completed')