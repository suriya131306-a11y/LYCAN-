import React, { useState } from 'react';
import { LycanLogo } from './LycanLogo';
import { Upload, X, Check, RotateCcw, Image as ImageIcon } from 'lucide-react';

interface LogoManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LogoManagerModal: React.FC<LogoManagerModalProps> = ({ isOpen, onClose }) => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(() => {
    try {
      return localStorage.getItem('lycan_custom_logo');
    } catch {
      return null;
    }
  });

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        setPreviewUrl(result);
        try {
          localStorage.setItem('lycan_custom_logo', result);
          window.dispatchEvent(new Event('lycan_logo_updated'));
        } catch {
          // ignore
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetDefault = () => {
    setPreviewUrl(null);
    try {
      localStorage.removeItem('lycan_custom_logo');
      window.dispatchEvent(new Event('lycan_logo_updated'));
    } catch {
      // ignore
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-md">
      <div className="relative w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-2xl text-zinc-100">
        
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-2 mb-2">
          <ImageIcon className="w-5 h-5 text-zinc-300" />
          <h3 className="text-lg font-bold uppercase text-white font-heading">
            Official LYCAN Logo Assets
          </h3>
        </div>

        <p className="text-xs text-zinc-400 leading-relaxed mb-6">
          The website is rendered with the precision vector geometry of the LYCAN black wolf emblem and wordmark. You can also upload your exact local emblem/wordmark PNG or SVG to display across all navigation, hero reveals, and footers.
        </p>

        {/* Current Active Preview */}
        <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 flex flex-col items-center justify-center gap-3 mb-6 min-h-[140px]">
          <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">
            Active Logo Presentation
          </span>
          <LycanLogo variant="badge" size={120} />
        </div>

        {/* Upload Controls */}
        <div className="space-y-3">
          <label className="flex flex-col items-center justify-center border-2 border-dashed border-zinc-700 hover:border-zinc-500 rounded-xl p-4 cursor-pointer transition-colors bg-zinc-950/40">
            <Upload className="w-5 h-5 text-zinc-400 mb-1" />
            <span className="text-xs font-semibold text-zinc-200">
              Upload Official Logo File (PNG, SVG)
            </span>
            <span className="text-[10px] text-zinc-500 mt-0.5">
              Preserves 100% original dimensions & transparency
            </span>
            <input
              type="file"
              accept="image/png, image/svg+xml, image/jpeg"
              onChange={handleFileUpload}
              className="hidden"
            />
          </label>

          {previewUrl && (
            <button
              type="button"
              onClick={handleResetDefault}
              className="w-full py-2.5 px-4 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-medium text-zinc-300 transition-colors flex items-center justify-center gap-2"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset to Official Precision Vector Emblem</span>
            </button>
          )}

          <button
            type="button"
            onClick={onClose}
            className="w-full py-2.5 px-4 rounded-lg bg-white text-zinc-950 text-xs font-semibold uppercase tracking-wider hover:bg-zinc-200 transition-colors"
          >
            Done
          </button>
        </div>

      </div>
    </div>
  );
};
