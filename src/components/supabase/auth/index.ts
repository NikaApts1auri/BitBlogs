import { supabase } from ".."

export const registerrr=async ({email,password}:{email:string, password:string})=>{
    return supabase.auth.signUp({ email, password })

}