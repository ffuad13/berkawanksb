import { Button } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { CldUploadWidget, CloudinaryUploadWidgetInfo } from "next-cloudinary";
import { handleInsertFoto } from "@/actions/laporan";

import { CameraIcon } from "./icons";
import { foto } from "@/types/entities";

export default function UploadImage({ laporan_id, disabled = false }: foto & {disabled?: boolean}) {
  const [resources, setResources] = React.useState<CloudinaryUploadWidgetInfo[]>([]);

  return (
    <CldUploadWidget
      options={{
        sources: ["local", "camera"],
        multiple: true,
        maxFiles: 3,
      }}
      uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!}
      onSuccess={async (result) => {
        const info = result?.info as CloudinaryUploadWidgetInfo;

        if (Array.isArray(info)) {
          setResources((prev) => [...prev, ...info]);
          await Promise.all(
            info.map((file: CloudinaryUploadWidgetInfo) => {
              if (file && file.secure_url && file.original_filename) {
                return handleInsertFoto({
                  laporan_id,
                  file_name: file.original_filename,
                  image_url: file.secure_url,
                });
              }
            })
          );
        } else if (info && info.secure_url && info.original_filename) {
          setResources((prev) => [...prev, info]);
          await handleInsertFoto({
            laporan_id,
            file_name: info.original_filename,
            image_url: info.secure_url,
          });
        }
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
              isDisabled={disabled}
            >
              Upload Kegiatan
            </Button>

            <div className="flex gap-2 flex-wrap">
              {resources.map((resource, index) => (
                <div key={index} className="relative">
                  <Image
                    src={resource.thumbnail_url || resource.secure_url}
                    alt={`Upload ${index + 1}`}
                    width={96}
                    height={96}
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
