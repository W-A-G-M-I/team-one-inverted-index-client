import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
export const CreateUserAccount = () => {
    return useMutation({
        mutationFn: async ({ email, fullname, password }) => {
            try {
                const res = await fetch('http://localhost:5000/api/auth/signup', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email, fullname, password })
                });

                const data = await res.json();
                if (!res.ok) throw new Error(data.error);
                if (data.error) throw new Error(data.error);
                console.log(data);
                toast.success('Account created successfully!');
                return data;
            } catch (error) {
                console.error(error);
                toast.error(error.message || 'Failed to create user');
            }
        }
    });
};


export const SignInAccount = () => {
    return useMutation({
        mutationFn: async ({ email, password }) => {
            try {
                const res = await fetch('http://localhost:5000/api/auth/signin', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email, password })
                });
                const data = await res.json();
                if (!res.ok) throw new Error(data.error);
                console.log(data);
                toast.success('Logged in successfully!');
                return data;
            }catch (error) {
                console.error(error);
                toast.error(error.message || 'Failed to create user');
            }
        }
    })
}
