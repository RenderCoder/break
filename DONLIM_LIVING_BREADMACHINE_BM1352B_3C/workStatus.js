/**
 * Created by huchunbo on 2017/2/16.
 */
define(['./js/manager/workStatusManager'], function (workStatus) {
    workStatus.add(
        'isAppoinment',
        function (data) {
            return data.Reserve === '1'
        }
    );
    
    workStatus.add(
        'isMultistep',
        function (data) {
            return ['1','2','3','4','5','6','7','8','9','10','11','12','13'].indexOf(data.workMode) >= 0;
        }
    );

    workStatus.add(
        'isCustom',
        function (data) {
            return data.workMode === '31'
        }
    );
    
    workStatus.add(
        'canStartWork',
        function (data) {
            return true
        }
    );
    
    workStatus.add(
        'isPreparingHeat',
        function (data) {
            return true
        }
    );
    
    workStatus.add(
        'shouldAutoCountDownTime',
         function (data) {
             return true
         }
    );
    
});