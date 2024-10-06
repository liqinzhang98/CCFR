const CurrentUserID = {
    data: {
        uID: "",
    },
    methods: {
        setCurrentUid(newUid){
            CurrentUserID.data.uID = newUid;
        }
    }
};

export default CurrentUserID;