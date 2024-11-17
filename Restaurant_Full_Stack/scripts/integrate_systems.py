
# Import necessary libraries
import requests

def integrate_frontend_backend(frontend_url, backend_url):
    print("Integrating frontend with backend services...")
    # Checking the status of frontend
    frontend_response = requests.get(frontend_url)
    if frontend_response.status_code == 200:
        print("Frontend is up and running.")
    else:
        print("Error: Frontend service is down.")
        return

    # Checking the status of backend
    backend_response = requests.get(backend_url)
    if backend_response.status_code == 200:
        print("Backend is up and running.")
    else:
        print("Error: Backend service is down.")
        return
    
    # If both services are up, proceed with integration
    print("Both services are available. Proceeding with integration.")
    # Implement integration logic here (could be syncing data, APIs call, etc.)
    print("Integration successful!")

# Example usage
frontend_url = "http://example-frontend.com"
backend_url = "http://example-backend.com"
integrate_frontend_backend(frontend_url, backend_url)