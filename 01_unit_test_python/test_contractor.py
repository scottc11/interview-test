import unittest


class Contractor:
    name = None
    is_active = False
    number_of_completed_project = None
    number_of_on_going_project = None
    percentage_service_fee_rate = None
    total_amount_of_money_earned = None

    def __init__(self, name):
        self.name = name
        pass

    def get_name(self):
        return self.name

    def get_is_active(self) -> bool:
        return self.is_active

    def set_number_of_completed_project(self, number: int):
        self.number_of_completed_project = number

    def set_number_of_on_going_project(self, number: int):
        self.number_of_on_going_project = number

    def get_total_number_of_project(self) -> int:
        return self.number_of_completed_project + self.number_of_on_going_project

    def set_percentage_service_fee_rate(self, service_fee_rate: int):
        self.percentage_service_fee_rate = service_fee_rate

    def set_total_amount_of_money_earned(self, total_amount: int):
        self.total_amount_of_money_earned = total_amount


class TestContractor(unittest.TestCase):
    def setUp(self):
        self.contractor = Contractor('Erico')

    def test_get_name(self):
        self.assertEqual('Erico', self.contractor.get_name())
