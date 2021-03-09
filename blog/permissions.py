from rest_framework.permissions import BasePermission


class PublicOrSuperUser(BasePermission):

    def has_object_permission(self, request, view, obj):
        return bool(obj.is_public or request.user.is_superuser)
