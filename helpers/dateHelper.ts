export const getFormatedDateString = (date: Date): string => {
    if (isToday(date)) {
        return "Present";
    } else {
        return date.toLocaleString('default', { month: 'short', year: '2-digit' });
    }
}

export const isToday = (date: Date): boolean => {
    const today = new Date()
    return date.getDate() == today.getDate() &&
      date.getMonth() == today.getMonth() &&
      date.getFullYear() == today.getFullYear()
}