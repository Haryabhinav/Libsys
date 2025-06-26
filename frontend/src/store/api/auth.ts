//
import baseApi from './index';


export const authApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        login: build.mutation({
            query: (credentials) => ({
                url: 'http://localhost:5000/auth/login',
                method: 'POST',
                body: credentials,
            })
        }),
        register: build.mutation({
            query: (credentials) => ({
                url: 'http://localhost:5000/auth/register',
                method: 'POST',
                body: credentials,
            })
        }),
    }),
    overrideExisting: false,
});

export const { useLoginMutation, useRegisterMutation } = authApi;