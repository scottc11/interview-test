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

    def get_total_commission_earned(self) -> float:
        return self.total_amount_of_money_earned * (self.percentage_service_fee_rate / 100)

class TestContractor(unittest.TestCase):
    def setUp(self):
        self.contractor = Contractor('Erico')

    def test_get_name(self):
        self.assertEqual('Erico', self.contractor.get_name())

    def test_get_is_active(self):
        self.contractor.is_active = True
        self.assertTrue(self.contractor.get_is_active())
        self.contractor.is_active = False
        self.assertFalse(self.contractor.get_is_active())

    def test_set_number_of_completed_project(self):
        self.contractor.set_number_of_completed_project(7)
        self.assertEqual(7, self.contractor.number_of_completed_project)

    def test_set_number_of_on_going_project(self):
        self.contractor.set_number_of_on_going_project(13)
        self.assertEqual(13, self.contractor.number_of_on_going_project)

    def test_get_total_number_of_project(self):
        self.contractor.set_number_of_completed_project(3)
        self.contractor.set_number_of_on_going_project(5)
        self.assertIs(type(1), type(self.contractor.get_total_number_of_project()), "returned object is not of type 'int'")
        self.assertEqual(3+5, self.contractor.get_total_number_of_project())

    def test_set_percentage_service_fee_rate(self):
        self.contractor.set_percentage_service_fee_rate(7)
        self.assertEqual(7, self.contractor.percentage_service_fee_rate)

    def test_set_total_amount_of_money_earned(self):
        self.contractor.set_total_amount_of_money_earned(1240)
        self.assertEqual(1240, self.contractor.total_amount_of_money_earned)

    def test_get_total_commission_earned(self):
        self.contractor.set_total_amount_of_money_earned(100)
        self.contractor.set_percentage_service_fee_rate(3)
        expected = 100 * 0.03
        self.assertIs(type(0.01), type(self.contractor.get_total_commission_earned()), "returned object is not of type 'float'")
        self.assertEqual(expected, self.contractor.get_total_commission_earned())
