import React from 'react'

function MetricsBanner() {
    const metrics = [
        { label: "Projects Completed", value: "10", unit: "+" },
        { label: "Full-Stack Frameworks", value: "3", unit: "+" },
        { label: "Cloud Availability", value: "99", unit: "%" },
        { label: "IoT & Hardware Integration", value: "2", unit: "+" }
    ];

  return (
    <main className='w-full p-6 lg:p-10 grid grid-cols-2 md:grid-cols-4 gap-2 bg-white border border-gray-200'>
        {metrics.map((metric, index) => (
            <div key={index} className='flex flex-col gap-2 items-center justify-center p-4 text-center'>
                <p className='text-3xl font-bold font-serif text-gray-800'>{metric.value}<span className='text-accent'> {metric.unit}</span></p>
                <p className='text-sm text-muted-foreground font-mono leading-tight text-gray-500'>{metric.label}</p>
            </div>
        ))}
    </main>
  )
}

export default MetricsBanner