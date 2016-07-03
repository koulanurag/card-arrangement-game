ngCardApp.controller('ngCardsController', ['$scope', '$timeout',
    function ($scope, $timeout) {
		$scope.selected_card =null;
		$scope.category=['spades','hearts','clubs','diamonds']

		$scope.card_sequence =[1,2,3,4,5,6,7,8,9,10,11,12,13]
	
		//  1==> ace ; 11==>jack ; 12==>queen ; 13==>king
		$scope.all_cards=[]
		var pattern  =['hearts_13','hearts_12','hearts_11','hearts_10','hearts_9','hearts_8','hearts_7',
					  'hearts_6','hearts_5','hearts_4','hearts_3','hearts_2','hearts_1',
					  'diamonds_13','diamonds_12','diamonds_11','diamonds_10','diamonds_9','diamonds_8','diamonds_7',
					  'diamonds_6','diamonds_5','diamonds_4','diamonds_3','diamonds_2','diamonds_1',
					  'spades_13','spades_12','spades_11','spades_10','spades_9','spades_8','spades_7',
					  'spades_6','spades_5','spades_4','spades_3','spades_2','spades_1',
					  'clubs_13','clubs_12','clubs_11','clubs_10','clubs_9','clubs_8','clubs_7',
					  'clubs_6','clubs_5','clubs_4','clubs_3','clubs_2','clubs_1'
					]
		angular.forEach($scope.category, function(cat, cat_index){
			angular.forEach($scope.card_sequence, function(card, card_index){
				$scope.all_cards.push({'label':cat+'_'+card,'count':card,'category':cat,'rank':'rank'+card});
			});
			
		});
		$scope.expected_pattern={}
		for (card_in in pattern) {
				$scope.expected_pattern[pattern[card_in]]=card_in;
		}
		console.log("Expected Pattern",$scope.expected_pattern)
		$scope.shuffle=function(array) {
							var currentIndex = array.length, temporaryValue, randomIndex;

							  // While there remain elements to shuffle...
							while (0 !== currentIndex) {

								// Pick a remaining element...
								randomIndex = Math.floor(Math.random() * currentIndex);
								currentIndex -= 1;
								// And swap it with the current element.
								temporaryValue = array[currentIndex];
								array[currentIndex] = array[randomIndex];
								array[randomIndex] = temporaryValue;
							}

							  return array;
						};
		$scope.shuffle($scope.all_cards)
		console.log($scope.all_cards);
		$scope.score =0;
		$scope.evaluate = function(){
			$scope.score =0;
			angular.forEach($scope.all_cards,function(card,card_index){
				$scope.score += Math.abs($scope.expected_pattern[card.label]-card_index);
				console.log(card.label,card_index,$scope.expected_pattern[card.label],$scope.score)
			})
			console.log($scope.score);
			$('#scoreModel').modal('show')
		}
		
		$scope.playAgain = function(){
			$scope.shuffle($scope.all_cards);
			$('#scoreModel').modal('hide')
		}
		
		$scope.actualPattern = function(){
		$scope.all_cards=[];
		var y=["hearts", "diamonds", "spades", "clubs"]
		angular.forEach(y, function(cat, cat_index){
			angular.forEach($scope.card_sequence, function(card, card_index){
				$scope.all_cards.push({'label':cat+'_'+(14-card),'count':14-card,'category':cat,'rank':'rank'+(14-card)});
			});
			
		});	
		}
		
    }]);
