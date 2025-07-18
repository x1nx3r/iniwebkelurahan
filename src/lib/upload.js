// src/lib/imageUpload.js
export async function uploadImage(file) {
  try {
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("/api/upload-image", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Upload failed");
    }

    const result = await response.json();

    if (result.success) {
      return {
        success: true,
        url: result.url,
        filename: result.filename,
        originalName: result.file.originalName,
      };
    } else {
      throw new Error(result.message || "Upload failed");
    }
  } catch (error) {
    console.error("Error uploading image:", error);
    return {
      success: false,
      error: error.message,
    };
  }
}
