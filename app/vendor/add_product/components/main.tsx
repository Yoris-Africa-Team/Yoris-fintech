'use client';
import { useState } from "react";
import { Camera, X } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AddProductForm() {
  const [images, setImages] = useState<File[]>([]);
  const [showOverlay, setShowOverlay] = useState(false);
  const router = useRouter();
  
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const files = Array.from(event.target.files).slice(0, 4);
      setImages(files);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white p-6">
      <div className="w-full max-w-lg p-6 rounded-lg relative">
        <button className="absolute top-4 left-4 text-yellow-500" onClick={() => router.back()}>&larr; Back</button>
        <h2 className="text-lg font-semibold text-center mb-4">Add Product</h2>
        
        <div>
          <p className="mb-2">Add Photo</p>
          <p className="text-sm text-gray-400">Multiple photos (4 max.) may be uploaded by the user in the desired order.</p>
          <div className="flex gap-2 mt-2">
            {images.map((file, index) => (
              <div key={index} className="relative w-16 h-16 bg-gray-800 rounded-lg overflow-hidden">
                <img
                  src={URL.createObjectURL(file)}
                  alt="preview"
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setImages(images.filter((_, i) => i !== index))}
                  className="absolute top-0 right-0 bg-red-600 text-white p-1 rounded-full"
                >
                  ✕
                </button>
              </div>
            ))}
            {images.length < 4 && (
              <label className="w-16 h-16 bg-gray-800 flex items-center justify-center rounded-lg cursor-pointer">
                <Camera className="text-gray-400" />
                <input
                  type="file"
                  accept="image/png"
                  multiple
                  className="hidden"
                  onChange={handleImageUpload}
                />
              </label>
            )}
          </div>
          <p className="text-xs text-gray-400 mt-1">Supported format is png. Picture may not exceed 5MB.</p>
        </div>
        
        <input type="text" placeholder="Title" className="mt-4 w-full p-2 bg-gray-800 rounded-lg" />
        <select className="mt-4 w-full p-2 bg-gray-800 rounded-lg">
          <option>Product Category*</option>
        </select>
        <select className="mt-4 w-full p-2 bg-gray-800 rounded-lg">
          <option>Product Sub Category*</option>
        </select>
        <select className="mt-4 w-full p-2 bg-gray-800 rounded-lg">
          <option>Product Mini-Sub Category</option>
        </select>
        
        <p className="mt-4">Price per Item (N)</p>
        <input type="number" placeholder="Price (N)" className="mt-1 w-full p-2 bg-gray-800 rounded-lg" />
        
        <textarea placeholder="Description" className="mt-4 w-full p-2 bg-gray-800 rounded-lg" rows={3}></textarea>
        
        <button 
          className="w-full mt-4 bg-yellow-600 text-black p-2 rounded-lg"
          onClick={() => setShowOverlay(true)}
        >
          CONTINUE
        </button>
      </div>

      {showOverlay && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80">
          <div className="bg-gray-900 p-6 rounded-lg max-w-md w-full">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">Vehicle specifications</h2>
              <button onClick={() => setShowOverlay(false)} className="text-white">
                <X size={20} />
              </button>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Please pick the right vehicle suitable for this kind of goods.
            </p>

            <div className="space-y-2">
              <button className="w-full flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                <span>🏍 Motorcycle</span>
                <span className="text-xs text-gray-400">Small - Medium size package</span>
              </button>
              <button className="w-full flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                <span>🚌 Bus</span>
                <span className="text-xs text-gray-400">Medium - Large size package</span>
              </button>
              <button className="w-full flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                <span>🚚 Pick-up truck</span>
                <span className="text-xs text-gray-400">Large size packages</span>
              </button>
            </div>

            <div className="mt-4 flex justify-between">
              <button onClick={() => setShowOverlay(false)} className="border border-yellow-500 text-yellow-500 p-2 rounded-lg">
                Cancel
              </button>
              <button className="bg-yellow-600 text-black p-2 rounded-lg">
                Upload Product
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
