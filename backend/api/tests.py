import json
from django.test import TestCase


class HelloViewTests(TestCase):
    def test_returns_200(self):
        response = self.client.get('/api/hello/')
        self.assertEqual(response.status_code, 200)

    def test_returns_correct_json(self):
        response = self.client.get('/api/hello/')
        data = json.loads(response.content)
        self.assertEqual(data['message'], 'Hello from Django!')
        self.assertIn('ping_count', data)

    def test_ping_count_increments(self):
        self.client.get('/api/hello/')
        self.client.get('/api/hello/')
        response = self.client.get('/api/hello/')
        data = json.loads(response.content)
        self.assertEqual(data['ping_count'], 3)

    def test_content_type_is_json(self):
        response = self.client.get('/api/hello/')
        self.assertIn('application/json', response['Content-Type'])
