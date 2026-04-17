import React, { useEffect } from 'react';
import { useUser } from '@/hooks/user/useUser';
import { useUserPrivacitySettings } from '@/hooks/user/useUserPrivacitySettings';

export const EditPrivacity = () => {
  const { user } = useUser();
  const {
    privacityOptions,
    getPrivacitySettings,
    updateOnePrivacitySetting,
    savePrivacityChanges,
  } = useUserPrivacitySettings();

  useEffect(() => {
    getPrivacitySettings();
  }, []);

  return (
    <div className="w-full bg-violet-500 rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6 text-white">Panel de Privacidad</h2>

      <div className="space-y-6">
        <div className="pt-6 border-t border-violet-400/40">
          <div className="grid grid-cols-1 gap-4">
            {privacityOptions.map((option) => {
              const isChecked = !!user?.privacity_settings?.[option.key];
              const isDisabled = option.disabled;
              const inputId = `checkbox-${option.key}`;

              return (
                <label
                  key={option.key}
                  className="flex items-center justify-between bg-violet-600/30 p-4 rounded-xl border border-violet-400/20 hover:bg-violet-600/50 transition-all cursor-pointer group"
                >
                  <span className="text-sm font-medium text-white group-hover:text-white/90">
                    {option.label}
                  </span>

                  <div className="relative inline-flex items-center">
                    <input
                      id={inputId}
                      type="checkbox"
                      className="sr-only"
                      checked={isChecked}
                      onChange={() => updateOnePrivacitySetting(option.key)}
                      disabled={option.disabled}
                    />

                    {/* Track */}
                    <div
                      className={`w-11 h-6 rounded-full transition-colors duration-200 ease-in-out ${
                        isDisabled
                          ? 'bg-neutral-950/50'
                          : isChecked
                            ? 'bg-violet-950'
                            : 'bg-violet-300'
                      }`}
                    />

                    {/* Thumb */}
                    <div
                      className={`absolute left-1 w-4 h-4 rounded-full bg-white shadow-md transform transition-transform duration-200 ease-in-out ${
                        isChecked ? 'translate-x-5' : 'translate-x-0'
                      }`}
                    />
                  </div>
                </label>
              );
            })}
          </div>
        </div>

        <div className="pt-6 flex justify-end">
          <button
            type="button"
            className="bg-white text-violet-700 hover:bg-violet-100 active:scale-95 transition-all duration-200 font-bold py-3 px-8 rounded-xl shadow-lg"
            onClick={() => savePrivacityChanges()}
          >
            Guardar Cambios
          </button>
        </div>
      </div>
    </div>
  );
};
