/* eslint-disable */
'use client'

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'

async function apiRequest(endpoint: string, options?: RequestInit) {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || process.env.baseUrl
    console.log(baseUrl)
    // Get access token from cookies
    // const accessToken = cookies.getAccessToken()

    const response = await fetch(`${baseUrl}${endpoint}`, {
        headers: {
            'Content-Type': 'application/json',
            // ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
            ...options?.headers
        },
        ...options
    })

    if (!response.ok) {
        // Handle 401 Unauthorized response
        if (response.status === 401) {
            // Use auth store logout which handles cleanup and redirect
            // const logout = useAuthStore.getState().logout
            // logout()

            throw new Error('Unauthorized: Please log in again')
        }

        throw new Error(`API Error: ${response.status} ${response.statusText}`)
    }

    return response.json()
}

// Custom hook for GET requests
export function useApi<T>(
    endpoint: string,
    options?: {
        enabled?: boolean
        staleTime?: number
        cacheTime?: number
    }
) {
    return useQuery<T>({
        queryKey: [endpoint],
        queryFn: () => apiRequest(endpoint, { method: 'GET' }),
        enabled: options?.enabled !== false,
        staleTime: options?.staleTime,
    })
}

// Custom hook for POST requests
export function usePost() {
    const queryClient = useQueryClient()
    
    return useMutation({
        mutationFn: async ({ endpoint, data }: { endpoint: string; data?: any }) => {
            return apiRequest(endpoint, {
                method: 'POST',
                body: JSON.stringify(data)
            })
        },
        onSuccess: () => {
            // Optionally invalidate related queries
            queryClient.invalidateQueries()
        }
    })
}

// Custom hook for PUT requests
export function usePut() {
    const queryClient = useQueryClient()
    
    return useMutation({
        mutationFn: async ({ endpoint, data }: { endpoint: string; data?: any }) => {
            return apiRequest(endpoint, {
                method: 'PUT',
                body: JSON.stringify(data)
            })
        },
        onSuccess: () => {
            queryClient.invalidateQueries()
        }
    })
}

// Custom hook for DELETE requests
export function useDelete() {
    const queryClient = useQueryClient()
    
    return useMutation({
        mutationFn: async (endpoint: string) => {
            return apiRequest(endpoint, {
                method: 'DELETE'
            })
        },
        onSuccess: () => {
            queryClient.invalidateQueries()
        }
    })
}

export { apiRequest }