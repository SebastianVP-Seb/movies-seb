//Para obtener las iniciales del nombre, utilizando split
export const getNameInitials=(name)=>{
    const nameArray=name.split(' ');
    const hasMoreThanOneName=nameArray.length>1;
    const getInitials=hasMoreThanOneName
        ? `${nameArray[0][0]}${nameArray[nameArray.length-1][0]}`
        : `${nameArray[0][0]}${nameArray[0][1]}`;
    return getInitials.toUpperCase();
};