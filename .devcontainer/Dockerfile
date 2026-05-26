FROM mcr.microsoft.com/devcontainers/python:3.11

# Install Python dependencies at image build time — no postCreateCommand needed
COPY backend/requirements.txt /tmp/pip-requirements.txt
RUN pip install -r /tmp/pip-requirements.txt
