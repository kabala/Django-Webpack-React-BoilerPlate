from rest_framework import serializers
from .models import Play


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Play
        fields = ('name', 'address', 'city')
