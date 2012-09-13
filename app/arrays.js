if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        for(var i = 0; i<arr.length;i++){
            if(arr[i] == item){
                return i;
            }
        }
    },

    sum : function(arr) {
        var total = 0;
        for(i=0;i<arr.length;i++){
            total += arr[i];
            return total;
        }

    },

    remove : function(arr, item) {
        var newArray = [];
        for(var i=0;i<arr.length;i++){
            if(arr[i] !== item){
                newArray.push(arr[i]);
            }
        }
        return newArray;
    },

    append : function(arr, item) {
        arr.push(item);
        return arr;
    },

    truncate : function(arr) {
        arr.pop(-1);
        return arr;
    },

    concat : function(arr1, arr2) {
        var combine = arr1.concat(arr2);
        return combine;
    },

    insert : function(arr, item, index) {
        arr.splice(index, 0, item);
        return arr;
    },

    count : function(arr, item) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === item) {
                return i;
            }
        }
    },

    duplicates : function(arr) {
        dupItems = [];
        for (var i = 0; i < arr.length; i++) {
            
            

        }
        
    },

    square : function(arr) {
        for (var i = 0; i < arr.length; i++) {
            arr[i] *= arr[i];
        }
        return arr;
    },

    findAllOccurrences : function(arr, target) {
        foundItems = [];

        for(var i = 0; i<arr.length;i++){
            if(arr[i] === target){
                foundItems.push(i); 
            }
        }
        return foundItems;
    }
  };
});
