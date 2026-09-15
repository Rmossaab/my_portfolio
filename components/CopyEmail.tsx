"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export default function CopyEmail({ email }: { email: string }) {
  const [status, setStatus] = useState("");
  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setStatus("Email copied");
    } catch {
      setStatus("Please select and copy the email address above.");
    }
  }
  return (
    <div className="copy-control">
      <button className="text-link" onClick={copy}>
        {status === "Email copied" ? <Check size={16} /> : <Copy size={16} />}{" "}
        Copy email
      </button>
      <span role="status">{status}</span>
    </div>
  );
}
