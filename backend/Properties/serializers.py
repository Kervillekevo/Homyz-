from rest_framework import serializers
import cloudinary
from .models import Property, PropertyImage, Inquiry, Category


class PropertyImageSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()

    class Meta:
        model = PropertyImage
        fields = ['id', 'image', 'is_primary']

    def get_image(self, obj):
        return cloudinary.CloudinaryImage(str(obj.image)).build_url()


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name']


class PropertyListSerializer(serializers.ModelSerializer):
    images = PropertyImageSerializer(many=True, read_only=True)
    category = CategorySerializer(read_only=True)

    class Meta:
        model = Property
        fields = [
            'id', 'title', 'price', 'location', 'city',
            'property_type', 'category', 'bedrooms', 'bathrooms',
            'area', 'is_featured', 'views_count', 'images',
            'agent_name', 'agent_phone', 'agent_email', 'created_at'
        ]


class PropertyDetailSerializer(serializers.ModelSerializer):
    images = PropertyImageSerializer(many=True, read_only=True)
    category = CategorySerializer(read_only=True)

    class Meta:
        model = Property
        fields = '__all__'


class InquirySerializer(serializers.ModelSerializer):
    class Meta:
        model = Inquiry
        fields = ['id', 'property', 'name', 'phone', 'email', 'message', 'created_at']
        read_only_fields = ['created_at']