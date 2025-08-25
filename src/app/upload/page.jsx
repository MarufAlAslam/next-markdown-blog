"use client";
import React, { useRef, useState } from "react";
const isServerless = process.env.NODE_ENV === "production";

export default function UploadPage() {
  const fileInput = useRef();
  const [message, setMessage] = useState("");

  const handleUpload = async (e) => {
    e.preventDefault();
    const file = fileInput.current.files[0];
    if (!file) {
      setMessage("Please select a markdown file.");
      return;
    }
    if (!file.name.endsWith(".md")) {
      setMessage("Only .md files are allowed.");
      return;
    }
    const formData = new FormData();
    formData.append("file", file);
    setMessage("Uploading...");
    const res = await fetch("/api/upload-md", {
      method: "POST",
      body: formData,
    });
    if (res.ok) {
      setMessage("Upload successful! Refresh the blog list to see your post.");
      fileInput.current.value = "";
    } else {
      setMessage("Upload failed. Try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <form
        onSubmit={handleUpload}
        className="bg-white shadow-lg rounded-2xl p-8 flex flex-col gap-4 w-full max-w-md border border-gray-200"
      >
        <h2 className="text-2xl font-bold text-green-700 mb-2">Upload Markdown File</h2>
        <input
          type="file"
          accept=".md"
          ref={fileInput}
          className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100 border border-gray-300 rounded-lg p-2"
        />
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg transition"
        >
          Upload
        </button>
        {message && <div className="text-center text-sm text-gray-600 mt-2">{message}</div>}
      </form>
    </div>
  );
}
      <h2 className="text-2xl font-bold text-green-700 mb-2">Upload Markdown File</h2>
      {isServerless ? (
        <div className="text-yellow-600 bg-yellow-100 border border-yellow-300 rounded p-4 mb-4">
          <strong>Uploads are disabled:</strong> This site is running on a serverless host (like Vercel or Netlify) and cannot accept file uploads.<br />
          Please use the local development environment to upload markdown files.
        </div>
      ) : (
        <>
          <input
            type="file"
            accept=".md"
            ref={fileInput}
            className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100 border border-gray-300 rounded-lg p-2"
          />
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg transition"
          >
            Upload
          </button>
          {message && <div className="text-center text-sm text-gray-600 mt-2">{message}</div>}
        </>
      )}
