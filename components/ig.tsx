"use client";

import React, { useEffect, useRef } from "react";
import { Card, CardBody } from "@heroui/react";

export default function InstagramEmbed() {
  const embedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.setAttribute("src", "https://www.instagram.com/embed.js");
    script.setAttribute("async", "");
    if (embedRef.current) {
      embedRef.current.appendChild(script);
    }
  }, []);

  return (
    <Card>
      <CardBody>
        <div ref={embedRef}>
          <blockquote
            className="instagram-media"
            data-instgrm-permalink="https://www.instagram.com/reel/DKMJJZTy-wI/?utm_source=ig_embed&utm_campaign=loading"
            data-instgrm-version="14"
            style={{
              background: "#FFF",
              border: 0,
              borderRadius: "3px",
              boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
              margin: "1px",
              maxWidth: "658px",
              minWidth: "326px",
              padding: 0,
              width: "calc(100% - 2px)",
            }}
          >
            <a
              href="https://www.instagram.com/reel/DKMJJZTy-wI/?utm_source=ig_embed&utm_campaign=loading"
              target="_blank"
              rel="noopener noreferrer"
            >
              View this post on Instagram
            </a>
          </blockquote>
        </div>
      </CardBody>
    </Card>
  );
}
