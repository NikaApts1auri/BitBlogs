import { useState, useEffect } from "react";
import { createAvatar } from "@dicebear/core";
import { croodles } from "@dicebear/collection";
interface ProfileFieldProps {
  label: string;
  value: string;
  className?: string; // Add className here
}

export default function Profile() {
  const defaultAvatar = createAvatar(
    croodles,
    {}
  ).toDataUri();

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

  useEffect(() => {
    const storedProfile = localStorage.getItem(
      "profileData"
    );
    if (storedProfile) {
      const parsedProfile = JSON.parse(
        storedProfile
      );
      setProfileData(parsedProfile);
      setSavedProfile(parsedProfile);
    }
  }, [defaultAvatar]);

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
      avatarUrl: defaultAvatar, // Reset to default avatar
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem(
      "profileData",
      JSON.stringify(profileData)
    );
    setSavedProfile(profileData);
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-teal-700 p-8">
      <div className="bg-white p-8 rounded-3xl shadow-2xl max-w-4xl w-full">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Profile
        </h1>
        {!isEditing ? (
          <div>
            <div className="text-center   mt-6">
              <img
                src={
                  savedProfile.avatarUrl ||
                  defaultAvatar
                }
                alt="Avatar"
                className="w-36 h-36 rounded-full mx-auto shadow-lg border-4 border-gray-100 mb-6"
              />
            </div>
            <div className="space-y-6 text-[1.4rem] px-[7rem] ">
              <ProfileField
                label="სახელი ქართულად"
                value={savedProfile.firstNameGe}
                className="border border-gray-300 p-4 rounded-lg shadow-md bg-gray-50"
              />
              <ProfileField
                label="სახელი ინგლისურად"
                value={savedProfile.firstNameEn}
                className="border border-gray-300 p-4 rounded-lg shadow-md bg-gray-50"
              />
              <ProfileField
                label="გვარი ქართულად"
                value={savedProfile.lastNameGe}
                className="border border-gray-300 p-4 rounded-lg shadow-md bg-gray-50"
              />
              <ProfileField
                label="გვარი ინგლისურად"
                value={savedProfile.lastNameEn}
                className="border border-gray-300 p-4 rounded-lg shadow-md bg-gray-50"
              />
              <ProfileField
                label="ტელეფონი"
                value={savedProfile.phoneNumber}
                className="border border-gray-300 p-4 rounded-lg shadow-md bg-gray-50"
              />
            </div>

            <div className="mt-6 text-center">
              <button
                onClick={handleEdit}
                className="py-2 px-6 text-white bg-gradient-to-r from-green-400 to-green-600 rounded-full hover:bg-gradient-to-r hover:from-green-600 hover:to-green-800 transition duration-300"
              >
                Edit
              </button>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-6 text-[black]"
          >
            <div className="space-y-6">
              <InputField
                label="სახელი ქართულად"
                id="firstNameGe"
                name="firstNameGe"
                value={profileData.firstNameGe}
                onChange={handleChange}
              />
              <InputField
                label="სახელი ინგლისურად"
                id="firstNameEn"
                name="firstNameEn"
                value={profileData.firstNameEn}
                onChange={handleChange}
              />
              <InputField
                label="გვარი ქართულად"
                id="lastNameGe"
                name="lastNameGe"
                value={profileData.lastNameGe}
                onChange={handleChange}
              />
              <InputField
                label="გვარი ინგლისურად"
                id="lastNameEn"
                name="lastNameEn"
                value={profileData.lastNameEn}
                onChange={handleChange}
              />
              <div>
                <label
                  htmlFor="avatarUrl"
                  className="block text-gray-700 font-medium mb-2"
                >
                  ავატარის ატვირთვა
                </label>
                <input
                  type="file"
                  id="avatarUrl"
                  name="avatarUrl"
                  accept="image/*"
                  onChange={handleAvatarChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <InputField
                label="ტელეფონის ნომერი"
                id="phoneNumber"
                name="phoneNumber"
                value={profileData.phoneNumber}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="w-full py-3 text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg font-semibold text-xl hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 transition duration-300"
              >
                Save
              </button>
              <button
                type="button"
                onClick={handleAvatarReset}
                className="w-full py-3 text-white bg-red-600 rounded-lg font-semibold text-xl hover:bg-red-700 transition duration-300 mt-4"
              >
                Delete Photo
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

function InputField({
  label,
  id,
  name,
  value,
  onChange,
}: {
  label: string;
  id: string;
  name: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-gray-700 font-medium mb-1"
      >
        {label}
      </label>
      <input
        type="text"
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring focus:ring-blue-300 focus:outline-none"
      />
    </div>
  );
}

function ProfileField({
  label,
  value,
  className,
}: ProfileFieldProps) {
  return (
    <div
      className={`flex justify-between ${className}`}
    >
      <span className="font-medium text-gray-600">
        {label}:
      </span>
      <span className="text-gray-800">
        {value}
      </span>
    </div>
  );
}
