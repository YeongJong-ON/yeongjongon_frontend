const Community = () => {
    return (
        <div>
            <div className='flex gap-5'>
                <div className='border border-gray-200 p-5 rounded-md w-1/2 flex flex-col gap-4'>
                    <div className='flex justify-between items-center'>
                        <h1 className='text-xl font-semi_bold'><span className='text-cblue'>1-10</span> 시간표</h1>
                        <select name='timetable' className='border border-gray-200 outline-none p-2 rounded-md'>
                            <option value='this'>이번주</option>
                            <option value='next'>다음주</option>
                        </select>
                    </div>
                    <div className='grid grid-cols-6 border border-gray-200 text-center text-sm'>
                        <div className='bg-gray-100 border border-gray-200 px-2 py-2'>교시</div>
                        <div className='bg-gray-100 border border-gray-200 px-2 py-2'>월(8)</div>
                        <div className='bg-gray-100 border border-gray-200 px-2 py-2'>화(9)</div>
                        <div className='bg-gray-100 border border-gray-200 px-2 py-2'>수(10)</div>
                        <div className='bg-gray-100 border border-gray-200 px-2 py-2'>목(11)</div>
                        <div className='bg-gray-100 border border-gray-200 px-2 py-2'>금(12)</div>

                        <div className='border border-gray-200 px-2 py-2'>1(08:50)</div>
                        <div className='border border-gray-200 px-2 py-2'>한국<br/>임재</div>
                        <div className='border border-gray-200 px-2 py-2'>한국<br/>임재</div>
                        <div className='border border-gray-200 px-2 py-2'>정보<br/>김희</div>
                        <div className='border border-gray-200 px-2 py-2'>진로<br/>박삼</div>
                        <div className='border border-gray-200 px-2 py-2'>통과B<br/>백수</div>

                        <div className='border border-gray-200 px-2 py-2'>2(09:50)</div>
                        <div className='border border-gray-200 px-2 py-2'>국어<br/>김은</div>
                        <div className='border border-gray-200 px-2 py-2'>사회<br/>오희</div>
                        <div className='border border-gray-200 px-2 py-2'>사회<br/>오희</div>
                        <div className='border border-gray-200 px-2 py-2'>국어<br/>김은</div>
                        <div className='border border-gray-200 px-2 py-2'>사회<br/>오희</div>

                        <div className='border border-gray-200 px-2 py-2'>3(10:50)</div>
                        <div className='border border-gray-200 px-2 py-2'>사회<br/>오희</div>
                        <div className='border border-gray-200 px-2 py-2'>체육<br/>김시</div>
                        <div className='border border-gray-200 px-2 py-2'>수학<br/>이소</div>
                        <div className='border border-gray-200 px-2 py-2'>한국<br/>임재</div>
                        <div className='border border-gray-200 px-2 py-2'>영어<br/>전수</div>

                        <div className='border border-gray-200 px-2 py-2'>4(11:50)</div>
                        <div className='border border-gray-200 px-2 py-2'>영어<br/>전수</div>
                        <div className='border border-gray-200 px-2 py-2'>음악<br/>강호</div>
                        <div className='border border-gray-200 px-2 py-2'>통과A<br/>정수</div>
                        <div className='border border-gray-200 px-2 py-2'>수학<br/>이소</div>
                        <div className='border border-gray-200 px-2 py-2'>체육<br/>김시</div>

                        <div className='border border-gray-200 px-2 py-2'>5(13:40)</div>
                        <div className='border border-gray-200 px-2 py-2'>수학<br/>이소</div>
                        <div className='border border-gray-200 px-2 py-2'>국어<br/>김은</div>
                        <div className='border border-gray-200 px-2 py-2'>영어<br/>전수</div>
                        <div className='border border-gray-200 px-2 py-2'>통과A<br/>정수</div>
                        <div className='border border-gray-200 px-2 py-2 bg-yellow-200'>자율<br/>신은</div>

                        <div className='border border-gray-200 px-2 py-2'>6(14:40)</div>
                        <div className='border border-gray-200 px-2 py-2'>통과B<br/>백수</div>
                        <div className='border border-gray-200 px-2 py-2'>수학<br/>이소</div>
                        <div className='border border-gray-200 px-2 py-2'></div>
                        <div className='border border-gray-200 px-2 py-2'>음악<br/>강호</div>
                        <div className='border border-gray-200 px-2 py-2 bg-yellow-200'>자율<br/>김은</div>

                        <div className='border border-gray-200 px-2 py-2'>7(15:40)</div>
                        <div className='border border-gray-200 px-2 py-2'>과탐<br/>신은</div>
                        <div className='border border-gray-200 px-2 py-2'>정보<br/>김희</div>
                        <div className='border border-gray-200 px-2 py-2'></div>
                        <div className='border border-gray-200 px-2 py-2'>정보<br/>김희</div>
                        <div className='border border-gray-200 px-2 py-2'></div>
                    </div>
                </div>
                <div className='border border-gray-200 bg-gray-100 p-5 rounded-md w-1/2'>
                    <h1 className='text-xl font-semi_bold'>오늘의 급식표</h1>
                </div>
            </div>
        </div>
    )
}

export default Community