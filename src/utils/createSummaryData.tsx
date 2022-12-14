import ITodo from '../interfaces/todo.interface';
const categoryName = ['Task', 'Idea', 'Random Thought', 'Quote'];

interface IData {
  category: string;
  active: string | number;
  archived: string | number;
}

interface INewArray {
  category: string;
  status: string;
}

let newArray: INewArray[] = [];

export function createSummaryData (data:ITodo[]) {
  const totalData: IData[] = [];
  if (data instanceof Array) {
    newArray = data.map(e => { return { category: e.category, status: e.status } });
  }
  
  for (const name of categoryName) {
    let totalActive:number = 0;
    let totalArchived:number = 0;
    for (const item of newArray) {
      if (item.category === name && item.status === 'active') {
        totalActive++;
      }
      if (item.category === name && item.status === 'archived') {
        totalArchived++;
      }
    }

    const newTotalData = {
      category: name,
      active: totalActive,
      archived: totalArchived,
    }
    totalData.push(newTotalData);
    
    for (const item of totalData) {
        const index = totalData.findIndex(item => item.active === 0 && item.archived === 0);
        if (index !== -1) {
      totalData.splice(index, 1);
        }
    }
  }
  return totalData;
}