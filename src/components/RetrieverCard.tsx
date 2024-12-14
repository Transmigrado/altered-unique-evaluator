'use client'
import { useAppDispatch } from '@/lib/hooks';
import { useEffect } from 'react';
import { fetch } from '@/lib/features/cards';

const RetrieverCard = () => {


    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetch());
    }, []);

    return (
        <>
        
        </>
       
    );
}

export default RetrieverCard;