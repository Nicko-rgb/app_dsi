import React, { useState, useEffect } from 'react';

const useStorePost = () => {
    const [visibleUpload, setVisibleUpload] = useState(false);

    const handleVisibleUpload = () => {
        setVisibleUpload(!visibleUpload);
    }

    return {
        visibleUpload,
        handleVisibleUpload
    }
}

export default useStorePost