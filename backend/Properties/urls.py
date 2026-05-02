from django.urls import path
from .views import (
    PropertyListView,
    PropertyDetailView,
    InquiryCreateView,
    CategoryListView,
    featured_properties,
)

urlpatterns = [
    path('properties/', PropertyListView.as_view(), name='property-list'),
    path('properties/<int:pk>/', PropertyDetailView.as_view(), name='property-detail'),
    path('inquiries/', InquiryCreateView.as_view(), name='inquiry-create'),
    path('categories/', CategoryListView.as_view(), name='category-list'),
    path('featured/', featured_properties, name='featured-properties'),
]