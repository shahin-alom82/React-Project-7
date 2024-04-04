
import { useMediaQuery } from 'react-responsive';
import Timeline from 'react-calendar-timeline';
import 'react-calendar-timeline/lib/Timeline.css';
import { FcOvertime } from "react-icons/fc";
const TimeSchedule = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

    // Example data for the timeline
    const groups = [{ id: 1, title: 'Group 1' }, { id: 2, title: 'Group 2' }];
    const items = [
        { id: 1, group: 1, title: 'Item 1', start_time: new Date(2024, 2, 8, 10), end_time: new Date(2024, 2, 8, 12) },
        { id: 2, group: 2, title: 'Item 2', start_time: new Date(2024, 2, 8, 13), end_time: new Date(2024, 2, 8, 15) },
    ];

    return (
        <div>
            <div className='mt-10 text-5xl text-center font-bold flex gap-5 lg:ml-[490px]'>
                <FcOvertime></FcOvertime>
                <h1 className='text-amber-600'>Time Schedule</h1>
            </div>
            <h1 className='text-center mt-2 text-xl text-gray-700'>A time schedule, also known as a timetable or calendar
                is a visual representation of <br /> planned events or activities over a specified period.</h1>
            <div className='mt-10 rounded-md' style={{ height: '500px' }}>
                <Timeline
                    groups={groups}
                    items={items}
                    defaultTimeStart={new Date(2024, 2, 8, 8)}
                    defaultTimeEnd={new Date(2024, 2, 8, 18)}
                    stackItems
                    sidebarWidth={150}
                    lineHeight={50}
                    itemHeightRatio={0.75}
                    canMove={false}
                    canResize={false}
                    traditionalZoom={true}
                    showCursorLine={!isMobile}
                />
            </div>
        </div>
    );
};

export default TimeSchedule;
