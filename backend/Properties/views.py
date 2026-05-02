from django.shortcuts import render
from rest_framework import generics, filters
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django_filters.rest_framework import DjangoFilterBackend
from .models import Property, Inquiry, Category
from .serializers import (
    PropertyListSerializer,
    PropertyDetailSerializer,
    InquirySerializer,
    CategorySerializer
)


class PropertyListView(generics.ListAPIView):
    serializer_class = PropertyListSerializer
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['title', 'location', 'city']
    ordering_fields = ['price', 'created_at']

    def get_queryset(self):
        queryset = Property.objects.all()
        location = self.request.query_params.get('location')
        min_price = self.request.query_params.get('min_price')
        max_price = self.request.query_params.get('max_price')
        property_type = self.request.query_params.get('type')
        bedrooms = self.request.query_params.get('bedrooms')
        featured = self.request.query_params.get('featured')
        category = self.request.query_params.get('category')
        city = self.request.query_params.get('city')

        if location:
            queryset = queryset.filter(location__icontains=location)
        if city:
            queryset = queryset.filter(city__icontains=city)
        if min_price:
            queryset = queryset.filter(price__gte=min_price)
        if max_price:
            queryset = queryset.filter(price__lte=max_price)
        if property_type:
            queryset = queryset.filter(property_type=property_type)
        if bedrooms:
            queryset = queryset.filter(bedrooms=bedrooms)
        if featured:
            queryset = queryset.filter(is_featured=True)
        if category:
            queryset = queryset.filter(category__name__icontains=category)

        return queryset


class PropertyDetailView(generics.RetrieveAPIView):
    serializer_class = PropertyDetailSerializer
    queryset = Property.objects.all()

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        instance.views_count += 1
        instance.save()
        serializer = self.get_serializer(instance)
        return Response(serializer.data)


class InquiryCreateView(generics.CreateAPIView):
    serializer_class = InquirySerializer
    queryset = Inquiry.objects.all()


class CategoryListView(generics.ListAPIView):
    serializer_class = CategorySerializer
    queryset = Category.objects.all()


@api_view(['GET'])
def featured_properties(request):
    properties = Property.objects.filter(is_featured=True)[:6]
    serializer = PropertyListSerializer(properties, many=True, context={'request': request})
    return Response(serializer.data)
