import { useState } from "react";
import profileSchema from "../validationSchema";

export const useProfileData = (
  defaultAvatar: string
) => {
  const [profileData, setProfileData] = useState({
    firstNameGe: "",
    lastNameGe: "",
    firstNameEn: "",
    lastNameEn: "",
    avatarUrl: defaultAvatar,
    phoneNumber: "",
  });

  const [savedProfile, setSavedProfile] =
    useState(profileData);
  const [isEditing, setIsEditing] =
    useState(false);
  const [errors, setErrors] = useState<any>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAvatarChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileData((prevData) => ({
          ...prevData,
          avatarUrl: reader.result as string,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAvatarReset = () => {
    setProfileData((prevData) => ({
      ...prevData,
      avatarUrl: defaultAvatar,
    }));
  };

  const validateProfileData = async () => {
    try {
      await profileSchema.validate(profileData, {
        abortEarly: false,
      });
      setErrors({}); // Clear errors if validation passes
      return true;
    } catch (err: any) {
      const newErrors = err.inner.reduce(
        (acc: any, error: any) => {
          acc[error.path] = error.message;
          return acc;
        },
        {}
      );
      setErrors(newErrors);
      return false;
    }
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();
    const isValid = await validateProfileData();
    if (isValid) {
      localStorage.setItem(
        "profileData",
        JSON.stringify(profileData)
      );
      setSavedProfile(profileData);
      setIsEditing(false);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return {
    profileData,
    savedProfile,
    isEditing,
    errors,
    handleChange,
    handleAvatarChange,
    handleAvatarReset,
    handleSubmit,
    handleEdit,
  };
};
