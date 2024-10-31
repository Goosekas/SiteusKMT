import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';

function Schedule() {
  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Расписание занятий</h1>
      </div>
      
      <Tabs defaultValue="1" className="w-full">
        <div className="border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4">
            <TabsList className="flex w-full space-x-8 -mb-px">
              <TabsTrigger 
                value="1"
                className="px-6 py-3 border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 data-[state=active]:border-blue-500 data-[state=active]:text-blue-600"
              >
                Корпус 1
              </TabsTrigger>
              <TabsTrigger 
                value="2"
                className="px-6 py-3 border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 data-[state=active]:border-blue-500 data-[state=active]:text-blue-600"
              >
                Корпус 2
              </TabsTrigger>
            </TabsList>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 mt-8">
          <TabsContent value="1" className="bg-white p-6 rounded-lg shadow-lg">
            <div className="aspect-[16/9] bg-gray-100 rounded flex items-center justify-center">
              <p className="text-gray-500">Расписание для корпуса 1</p>
            </div>
          </TabsContent>
          
          <TabsContent value="2" className="bg-white p-6 rounded-lg shadow-lg">
            <div className="aspect-[16/9] bg-gray-100 rounded flex items-center justify-center">
              <p className="text-gray-500">Расписание для корпуса 2</p>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}

export default Schedule;