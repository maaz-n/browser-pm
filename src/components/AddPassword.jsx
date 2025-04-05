import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRecord, exitEditMode } from "../store/slice";
import { nanoid } from "@reduxjs/toolkit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { faPen, faPlus } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

const AddPassword = () => {
  const [form, setForm] = useState({
    id: "",
    website: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const editMode = useSelector((state) => state.PassOP?.editMode);
  const existingRecords = useSelector((state) => state.PassOP.records);
  const editingRecord = useSelector((state) => state.PassOP.editingRecord);

  const dispatch = useDispatch();

  useEffect(() => {
    if (editMode && editingRecord) {
      setForm({
        website: editingRecord.website || "",
        username: editingRecord.username || "",
        password: editingRecord.password || "",
        confirmPassword: "",
      });
    }
  }, [editMode, editingRecord]);

  const handleAddRecord = () => {
    if (form.password !== form.confirmPassword) {
      console.log("Passwords dont match");
      return;
    }
    if (editMode) {
      dispatch(exitEditMode());
    }

    dispatch(
      addRecord({
        id: nanoid(),
        website: form.website,
        username: form.username,
        password: form.password,
      })
    );

    const notify = toast.success("Record added!", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

    localStorage.setItem(
      "passwords",
      JSON.stringify([
        ...existingRecords,
        {
          id: nanoid(),
          website: form.website,
          username: form.username,
          password: form.password,
        },
      ])
    );

    setForm({
      website: "",
      username: "",
      password: "",
      confirmPassword: "",
    });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });

  const toggleShowPassword = (field) => {
    setShowPassword((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  return (
    <>
      <div className="hero-section text-center flex flex-col gap-5 items-center justify-center mt-10">
        <img src="/favicon.png" alt="" className="w-1/4 sm:w-1/4 lg:w-1/7" />
        <h1 className="text-3xl font-bold">BrowserPM</h1>
        <div className="flex flex-col gap-1">
          <p className="text-xl">Your very own Password Manager</p>
          <p className="text-lg mt-0">right in your browser!</p>
        </div>
      </div>
      <div className="add-password flex flex-col xl:flex-row xl:mx-20 items-center mt-15 gap-5">
        <input
          type="text"
          name="website"
          placeholder="Enter Website"
          className="password-field"
          value={form.website}
          onChange={handleChange}
        />
        <input
          type="text"
          name="username"
          placeholder="Enter username"
          className="password-field"
          value={form.username}
          onChange={handleChange}
        />

        <div className="password-field flex justify-between items-center" ref={passwordRef}>
          <input
            type={showPassword.password ? "password" : "text"}
            name="password"
            placeholder="Enter password"
            className="password-input-field"
            value={form.password}
            onChange={handleChange}
          />
          <FontAwesomeIcon
            onClick={() => toggleShowPassword("password")}
            icon={showPassword.password ? faEye : faEyeSlash}
          />
        </div>
        <div className="password-field flex justify-between items-center" ref={confirmPasswordRef}>
          <input
            type={showPassword.confirmPassword ? "password" : "text"}
            name="confirmPassword"
            placeholder="Confirm password"
            value={form.confirmPassword}
            onChange={handleChange}
            className="password-input-field"
          />
          <FontAwesomeIcon
            onClick={() => toggleShowPassword("confirmPassword")}
            icon={showPassword.confirmPassword ? faEye : faEyeSlash}
          />
        </div>
        <button
          className="bg-gray-800 hover:bg-gray-900 hover:cursor-pointer text-white px-5 w-1/4 h-15 xl:h-10 xl:w-1/5 text-xl rounded-[5px]"
          onClick={handleAddRecord}
        >
          {editMode ? (
            <FontAwesomeIcon icon={faPen} />
          ) : (
            <FontAwesomeIcon icon={faPlus} />
          )}
        </button>
      </div>
    </>
  );
};

export default AddPassword;
