import React, { useEffect, useState } from 'react';
import { siteImages, type SiteImageKey } from '../../lib/images';
import { readAsDataURL, SITE_IMAGES_EVENT, writeSiteImageOverride } from '../../lib/cmsSiteImage';
import { useCmsEditMode } from '../../context/CmsEditContext';

type Props = {
  siteKey: SiteImageKey;
  alt: string;
  className?: string;
  wrapperClassName?: string;
};

export function CmsImageSlot({ siteKey, alt, className, wrapperClassName }: Props) {
  const edit = useCmsEditMode();
  const [, bump] = useState(0);

  useEffect(() => {
    const h = () => bump((n) => n + 1);
    window.addEventListener(SITE_IMAGES_EVENT, h);
    return () => window.removeEventListener(SITE_IMAGES_EVENT, h);
  }, []);

  const src = siteImages[siteKey] as string;
  const wrap = (wrapperClassName || '').trim();
  const wrapCls = wrap.includes('absolute') ? wrap : `relative ${wrap}`.trim();

  return (
    <div className={wrapCls || 'relative'}>
      <img src={src} alt={alt} className={className} />
      {edit && (
        <label className="absolute bottom-2 right-2 z-20 cursor-pointer rounded-md bg-black/70 px-2 py-1 text-xs font-semibold text-white hover:bg-black/85">
          Replace
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={async (e) => {
              const f = e.target.files?.[0];
              e.target.value = '';
              if (!f) return;
              try {
                const fd = new FormData();
                fd.append('file', f);
                const base = (localStorage.getItem('cms_local_server') || 'http://localhost:4000').replace(
                  /\/$/,
                  ''
                );
                const res = await fetch(base + '/upload-image', { method: 'POST', body: fd });
                if (res.ok) {
                  const j = await res.json();
                  if (j?.ok && j.path) {
                    writeSiteImageOverride(siteKey, j.path);
                    return;
                  }
                }
              } catch {
                /* use data URL */
              }
              const url = await readAsDataURL(f);
              writeSiteImageOverride(siteKey, url);
            }}
          />
        </label>
      )}
    </div>
  );
}
