# blog/urls.py
from django.urls import path
from .views import (
    UserLogin,
    ArticleListPanelAPIView,
    ArticleDetailPannelAPIView,
)


urlpatterns = [
    path('login/', UserLogin.as_view(), name='user-login'),  
    path('panel/articles/', ArticleListPanelAPIView.as_view(), name='article-list-panel'),
    path('panel/', ArticleDetailPannelAPIView.as_view(), name='article-detail-panel'),
    path('panel/article_detail/<int:pk>/', ArticleDetailPannelAPIView.as_view(), name='article-detail-panel'),
]
