import { Button } from "@heroui/react";
import Image from 'next/image'
import React from "react";
import { CldUploadWidget, CloudinaryUploadWidgetInfo } from "next-cloudinary";

import { CameraIcon } from "./icons";

export default function UploadImage() {
  const [resources, setResources] = React.useState<CloudinaryUploadWidgetInfo[]>([]);

  return (
    <CldUploadWidget
      options={{
        sources: ["local", "camera"],
        multiple: true,
        maxFiles: 3,
      }}
			uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!}
      onSuccess={(result) => {
        setResources((prev) => [...prev, result?.info as CloudinaryUploadWidgetInfo]);
      }}
    >
      {({ open }) => {
        function handleOnClick() {
          open();
        }
        return (
          <div className="space-y-4">
            <Button
              startContent={<CameraIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
              onPress={handleOnClick}
            >
              Upload Kegiatan
            </Button>

            <div className="flex gap-2 flex-wrap">
              {resources.map((resource, index) => (
                <div key={index} className="relative">
                  <Image
                    src={resource.thumbnail_url || resource.secure_url}
                    alt={`Upload ${index + 1}`}
                    className="w-24 h-24 object-cover rounded-md"
                  />
                  <button
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6"
                    onClick={() => setResources((prev) => prev.filter((_, i) => i !== index))}
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>
        );
      }}
    </CldUploadWidget>
  );
}
