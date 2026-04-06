export function useThemeColors(isLight: boolean) {
    return {
        bgPrimary: isLight ? 'bg-white' : 'bg-black',
        
        textPrimary: isLight ? 'text-black' : 'text-white',
        
        textSecondary: isLight ? 'text-black' : 'text-white/80',
        
        textMuted: isLight ? 'text-black/70' : 'text-white/50',

        textSubtitle: isLight ? 'text-zinc-500' : 'text-zinc-400',
        
        hoverText: isLight ? 'hover:text-black' : 'hover:text-white',
        
        borderFrame: isLight ? 'border-black/40' : 'border-white/20',
        
        buttonOutline: isLight 
            ? 'border-black text-black hover:bg-black hover:text-white'
            : 'border-white text-white hover:bg-white hover:text-black',

        dotGridBase: isLight ? '#E5E5E5' : '#1A1A1A',
        
        dotGridActive: isLight ? '#000000' : '#FFFFFF',

        themeToggleDarkBg: isLight ? 'bg-transparent' : 'bg-white',
        
        themeToggleDarkText: isLight ? 'text-black opacity-40' : 'text-white',
        
        themeToggleLightBg: isLight ? 'bg-zinc-900' : 'bg-transparent',
        
        themeToggleLightText: isLight ? 'text-black' : 'text-white opacity-40',
    };
}