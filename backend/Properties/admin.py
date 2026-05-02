from django.contrib import admin
from .models import Property, PropertyImage, Inquiry, Category


class PropertyImageInline(admin.TabularInline):
    model = PropertyImage
    extra = 1


@admin.register(Property)
class PropertyAdmin(admin.ModelAdmin):
    inlines = [PropertyImageInline]
    list_display = ['title', 'price', 'location', 'property_type', 'bedrooms', 'is_featured', 'views_count', 'created_at']
    list_filter = ['property_type', 'is_featured', 'category']
    list_editable = ['is_featured']
    search_fields = ['title', 'location', 'city']


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['id', 'name']


@admin.register(Inquiry)
class InquiryAdmin(admin.ModelAdmin):
    list_display = ['name', 'phone', 'email', 'property', 'created_at']
    readonly_fields = ['name', 'phone', 'email', 'message', 'property', 'created_at']