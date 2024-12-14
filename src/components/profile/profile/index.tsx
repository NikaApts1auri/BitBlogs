import { useState, useEffect } from "react";
import { createAvatar } from "@dicebear/core";
import { miniavs } from "@dicebear/collection";
import profileSchema from "../validationSchema";

export default function Profile() {
  const defaultAvatar = createAvatar(
    miniavs,
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
  const [errors, setErrors] = useState<any>({});

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

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-teal-700 p-8">
      <div className="bg-white p-8 rounded-3xl shadow-2xl max-w-4xl w-full">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Profile
        </h1>
        {!isEditing ? (
          <div>
            <div className="text-center mt-6">
              <img
                src={
                  savedProfile.avatarUrl ||
                  defaultAvatar
                }
                alt="Avatar"
                className="w-36 h-36 rounded-full mx-auto shadow-lg border-4 border-gray-100 mb-6"
              />
            </div>
            <div className="space-y-6 px-[42%] text-[1.4rem] ">
              <ProfileField
                label="სახელი"
                value={savedProfile.firstNameGe}
              />
              <ProfileField
                label="Name"
                value={savedProfile.firstNameEn}
              />
              <ProfileField
                label="გვარი"
                value={savedProfile.lastNameGe}
              />
              <ProfileField
                label="Last name"
                value={savedProfile.lastNameEn}
              />
              <ProfileField
                label="Phone"
                value={savedProfile.phoneNumber}
              />
            </div>

            <div className="mt-6 text-center">
              <button
                onClick={handleEdit}
                className="py-2 px-6 w-[10rem] h-[3rem] text-white bg-gradient-to-r from-green-400 to-green-600 rounded-full hover:bg-gradient-to-r hover:from-green-600 hover:to-green-800 transition duration-300"
              >
                Edit
              </button>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-6  text-[black]"
          >
            <div className="space-y-6">
              <InputField
                label="სახელი ქართულად"
                id="firstNameGe"
                name="firstNameGe"
                value={profileData.firstNameGe}
                onChange={handleChange}
                error={errors.firstNameGe}
              />
              <InputField
                label="სახელი ინგლისურად"
                id="firstNameEn"
                name="firstNameEn"
                value={profileData.firstNameEn}
                onChange={handleChange}
                error={errors.firstNameEn}
              />
              <InputField
                label="გვარი ქართულად"
                id="lastNameGe"
                name="lastNameGe"
                value={profileData.lastNameGe}
                onChange={handleChange}
                error={errors.lastNameGe}
              />
              <InputField
                label="გვარი ინგლისურად"
                id="lastNameEn"
                name="lastNameEn"
                value={profileData.lastNameEn}
                onChange={handleChange}
                error={errors.lastNameEn}
              />
              <div>
                <label
                  htmlFor="avatarUrl"
                  className="block text-gray-700 font-medium mb-2"
                >
                  სურათის ატვირთვა
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
                error={errors.phoneNumber}
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
  error,
}: {
  label: string;
  id: string;
  name: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
  error?: string;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-gray-700 font-medium mb-2"
      >
        {label}
      </label>
      <input
        type="text"
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-3 rounded-lg border ${
          error
            ? "border-red-500"
            : "border-gray-300"
        } focus:ring-2 focus:ring-blue-500 focus:outline-none`}
      />
      {error && (
        <p className="text-red-500 text-sm mt-2">
          {error}
        </p>
      )}
    </div>
  );
}

function ProfileField({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <p className="font-medium text-gray-700">
        {label}
      </p>
      <p className="text-gray-500">{value}</p>
    </div>
  );
}
