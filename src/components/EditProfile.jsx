"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Input, Label, Modal, TextField, toast, Toast } from "@heroui/react";
import { FaEdit, FaUser } from "react-icons/fa";

export function EditProfile({ user }) {

    const onSubmit = async (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const image = e.target.image.value; 

        const { data, error } = await authClient.updateUser({
            name: name,
            image: image,
        });

        if (data) {
            toast.success("Profile updated successfully!");
            window.location.reload();
        }
        
        if (error) {
            Toast.error(error.message || "Update failed!");
            console.error("Update error:", error);
        }
    };

    return (
        <Modal>
            <Button variant="secondary" className="flex items-center text-white bg-orange-500 gap-2">
                <FaEdit /> Edit Profile
            </Button>

            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md bg-[#0f172a] border border-white/10 rounded-3xl">
                        <Modal.CloseTrigger />

                        <Modal.Header>
                            <Modal.Icon className="bg-orange-500/10 text-orange-500">
                                <FaUser className="size-5" />
                            </Modal.Icon>
                            <Modal.Heading className="text-white">Update Profile</Modal.Heading>
                        </Modal.Header>

                        {/* onSubmit ফাংশনটি এখানে যোগ করা হয়েছে */}
                        <form onSubmit={onSubmit}>
                            <Modal.Body className="p-6">
                                <div className="flex flex-col gap-5">
                                    
                                    {/* Display Name Field */}
                                    <TextField className="w-full" name="name" type="text" variant="secondary">
                                        <Label className="text-gray-400 mb-1">Display Name</Label>
                                        <Input 
                                            placeholder="Enter your name" 
                                            defaultValue={user?.name}
                                            className="bg-white/5 border-white/10 text-white focus:border-orange-500" 
                                        />
                                    </TextField>

                                    {/* Profile Image URL Field */}
                                    <TextField className="w-full" name="image" type="url" variant="secondary">
                                        <Label className="text-gray-400 mb-1">Profile Image URL</Label>
                                        <Input 
                                            placeholder="https://example.com/photo.jpg" 
                                            defaultValue={user?.image}
                                            className="bg-white/5 border-white/10 text-white focus:border-orange-500" 
                                        />
                                    </TextField>
                                </div>
                            </Modal.Body>

                            <Modal.Footer className="border-t border-white/5">
                                <Button slot="close" variant="secondary" className="hover:bg-white/5 transition-colors">
                                    Cancel
                                </Button>
                                {/* Save Changes বাটনটি এখন টাইপ 'submit' হিসেবে কাজ করবে */}
                                <Button type="submit" className="bg-orange-600 hover:bg-orange-500 text-white">
                                    Save Changes
                                </Button>
                            </Modal.Footer>
                        </form>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}