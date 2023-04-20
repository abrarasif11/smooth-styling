import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';

const MyUsers = () => {
    const url = `https://smooth-styling-server.vercel.app/usersList`;
    const [displayUser, setDisplayUser] = useState();
    const { data: users = [],refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })
    console.log(users);
    const handleMakeAdmin = _id =>{
        fetch (`https://smooth-styling-server.vercel.app/usersList/admin/${_id}`,{
            method:'PUT'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                toast.success('Make Admin Successfully')
                refetch();     
              }
        })   
    }
    const handleDeleteUser = _id => {
        fetch(`https://smooth-styling-server.vercel.app/usersList/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    console.log(data.deletedCount);
                    toast.success("User Deleted Successfully")
                    const remainingUsers = displayUser.filter(usr => usr._id !== _id);
                    setDisplayUser(remainingUsers);
                }
            })
    }
    return (
        <div>
            <h1 className='text-4xl font-poppins font-bold mb-5 mt-10  text-black  w-fit px-2 py-2 ml-4'>All Users</h1>
            <div className="overflow-x-auto">
                <table className="table w-full font-poppins">
                    <thead>
                        <tr className='text-black'>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) =>
                                <tr key={user._id}>
                                    <th>{i + 1}</th>
                                    <td className='text-black font-semibold  font-poppins'>{user.name}</td>
                                    <td className='text-black font-semibold font-poppins'>{user.email}</td>
                                    <td className='text-black font-semibold font-poppins'>{user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className='rounded px-2 py-1 text-black  bg-border-black font-poppins bg-yellow-400  btn-xs'>Make Admin</button>}</td>
                                    <td>{user?.role !== 'admin' && <button onClick={() => handleDeleteUser(user._id)} className='bg-black font-poppins rounded text-white px-2'>Delete</button>}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyUsers;