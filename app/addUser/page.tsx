"use client"
import { IUser } from '@/types/IUser'
import axios from 'axios'
import { count } from 'console'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

type Props = {}

export default function page({}: Props) {
    const router = useRouter()
    const [firstName , setFirstName] = useState<string>("")
    const [lastName , setLastname] = useState<string>("")
    const [phoneNumber , setPhoneNumber] = useState<string>("")
    const [email , setEmail] = useState<string>("")

    const handleAdd = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
            const data : IUser = {
                firstName : firstName,
                lastName : lastName,
                phoneNumber : phoneNumber,
                email : email
            }

            const response = await axios.post("https://663489e79bb0df2359a1d096.mockapi.io/api/v1/users", data)
            if(response.status === 201){
                alert("Add user success")
                router.push("/")
            } else {
                alert("Add user faikled")
            }
    }
  return (
    <>
    <h1>Add Data</h1>
    <form>
        <label>First Name : </label>
        <input type="text" name="firstname" required onChange={(e) => {setFirstName(e.target.value)}} value={firstName} />
        <br /><br />
        <label>Last Name : </label>
        <input type="text" name="lastname" required onChange={(e) => {setLastname(e.target.value)}} value={lastName} />
        <br /><br />
        <label>Phone Number : </label>
        <input type="text" name="phoneNumber" required onChange={(e) => {setPhoneNumber(e.target.value)}} value={phoneNumber} />
        <br /><br />
        <label>Email : </label>
        <input type="email" name="email" required onChange={(e) => {setEmail(e.target.value)}} value={email} />
        <br /><br />
        <button type='submit' onClick={handleAdd}>Add</button>
    </form>
    </>
  )
}